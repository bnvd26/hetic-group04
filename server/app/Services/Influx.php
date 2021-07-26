<?php

namespace App\Services;
use InfluxDB2\Client;
use InfluxDB2\Model\WritePrecision;
use InfluxDB2\Point;
use App\Models\Captor;


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
                 dump($data);
                $rooms =   $data->values["topic"];
                $captors =  $data->values["_field"];
                $values =  $data->values["_value"];
                $time = $data->values["_time"];


                /*
                $captor = Captor::create([
                    "room_id" => /
                    "value" =>
                    "tx_time_ms_epoch" =>
                    "type" =>
                ]);
                */
            }
        }
        
        return;
    }  
}
