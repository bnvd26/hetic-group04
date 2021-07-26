<?php

namespace App\Services;
use InfluxDB2\Client;
use InfluxDB2\Model\WritePrecision;
use InfluxDB2\Point;
use App\Models\Captor;
use App\Models\Room;
use Illuminate\Support\Facades\DB;


class Influx
{
    public function index() {
            # You can generate a Token from the "Tokens Tab" in the UI
        $token = 'MGtXPqV9AmG6M54RfpB0Gzs9W0JjZpd-ZiZlXROJztJfysI6TjxgbV3WWMDxwVEB7aj2RWiOAbd5UBgBKRUY6Q==';
        $org = 'maxime.barlet@hetic.net';
        $bucket = 'mqtthetic';
        $url =  "https://europe-west1-1.gcp.cloud2.influxdata.com/";

        $this->client = new Client([
            "url" => $url,
            "token" => $token,
            "bucket" => $bucket,
            "precision" => WritePrecision::NS,
            "org" => $org,
            "debug" => true
        ]);

        
        $this->queryApi = $this->client->createQueryApi();

        $results = $this->queryApi->query('from(bucket:"mqtthetic") |> range(start: 1970-01-01T00:00:00.000000001Z) |> last()');
        
        //$datas = json_decode($result) ;
        
        foreach ($results as $result) {
            //dump($result)
            foreach($result->records as $data){
                // dump($data);
                $room =   $data->values["topic"];
                $captor =  $data->values["_field"];
                $value =  $data->values["_value"];
                $time = $data->values["_time"];

                $room = trim($room, "WEB3-GROUPE4/");
                
                $captor = trim($captor, "sensor_id");
                $captor = trim($captor, "_data_valu");
                $captor = trim($captor, "_tx_time_ms_epoch");
                $captor = "c" . $captor;
                
                if($room != "Salle0") {

                    $tableCaptors = DB::table('captors')->get();

                    foreach ($tableCaptors as $tableCaptor) {
                        if($tableCaptor->tx_time_ms_epoch != $time)
                        {
                            $equivalentRoom = Room::where("name", $room)->first();
                            $dataCaptor = Captor::create([
                                "room_id" => $equivalentRoom->id,
                                "value" => $value,
                                "tx_time_ms_epoch" => $time,
                                "type" => $captor,
                            ]);
                            if($captor == "captIN")
                            {
                                $equivalentRoom->update([
                                    "total_present_students" => (int)$equivalentRoom->total_present_students +1,
                                ]);
                            }
                            if($captor == "captOUT")
                            {
                                $equivalentRoom->update([
                                    "total_present_students" => (int)$equivalentRoom->total_present_students +1,
                                ]);
                            }
                        }
                    } 
                }
            }
        }
        return;
    }  
}
