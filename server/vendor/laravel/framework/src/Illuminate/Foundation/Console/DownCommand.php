<?php

namespace Illuminate\Foundation\Console;

<<<<<<< HEAD
use App\Http\Middleware\PreventRequestsDuringMaintenance;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Foundation\Exceptions\RegisterErrorViewPaths;
use Throwable;
=======
use Exception;
use Illuminate\Console\Command;
use Illuminate\Foundation\Exceptions\RegisterErrorViewPaths;
>>>>>>> 3838afb4629d7fb0bf8ee8c43ddc65312fda9c52

class DownCommand extends Command
{
    /**
     * The console command signature.
     *
     * @var string
     */
    protected $signature = 'down {--redirect= : The path that users should be redirected to}
                                 {--render= : The view that should be prerendered for display during maintenance mode}
                                 {--retry= : The number of seconds after which the request may be retried}
                                 {--refresh= : The number of seconds after which the browser may refresh}
                                 {--secret= : The secret phrase that may be used to bypass maintenance mode}
                                 {--status=503 : The status code that should be used when returning the maintenance mode response}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Put the application into maintenance / demo mode';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            if (is_file(storage_path('framework/down'))) {
                $this->comment('Application is already down.');

                return 0;
            }

            file_put_contents(
                storage_path('framework/down'),
                json_encode($this->getDownFilePayload(), JSON_PRETTY_PRINT)
            );

            file_put_contents(
                storage_path('framework/maintenance.php'),
                file_get_contents(__DIR__.'/stubs/maintenance-mode.stub')
            );

            $this->comment('Application is now in maintenance mode.');
        } catch (Exception $e) {
            $this->error('Failed to enter maintenance mode.');

            $this->error($e->getMessage());

            return 1;
        }
    }

    /**
     * Get the payload to be placed in the "down" file.
     *
     * @return array
     */
    protected function getDownFilePayload()
    {
        return [
<<<<<<< HEAD
            'except' => $this->excludedPaths(),
=======
>>>>>>> 3838afb4629d7fb0bf8ee8c43ddc65312fda9c52
            'redirect' => $this->redirectPath(),
            'retry' => $this->getRetryTime(),
            'refresh' => $this->option('refresh'),
            'secret' => $this->option('secret'),
            'status' => (int) $this->option('status', 503),
            'template' => $this->option('render') ? $this->prerenderView() : null,
        ];
    }

    /**
<<<<<<< HEAD
     * Get the paths that should be excluded from maintenance mode.
     *
     * @return array
     */
    protected function excludedPaths()
    {
        try {
            return $this->laravel->make(PreventRequestsDuringMaintenance::class)->getExcludedPaths();
        } catch (Throwable $e) {
            return [];
        }
    }

    /**
=======
>>>>>>> 3838afb4629d7fb0bf8ee8c43ddc65312fda9c52
     * Get the path that users should be redirected to.
     *
     * @return string
     */
    protected function redirectPath()
    {
        if ($this->option('redirect') && $this->option('redirect') !== '/') {
            return '/'.trim($this->option('redirect'), '/');
        }

        return $this->option('redirect');
    }

    /**
     * Prerender the specified view so that it can be rendered even before loading Composer.
     *
     * @return string
     */
    protected function prerenderView()
    {
        (new RegisterErrorViewPaths)();

        return view($this->option('render'), [
            'retryAfter' => $this->option('retry'),
        ])->render();
    }

    /**
     * Get the number of seconds the client should wait before retrying their request.
     *
     * @return int|null
     */
    protected function getRetryTime()
    {
        $retry = $this->option('retry');

        return is_numeric($retry) && $retry > 0 ? (int) $retry : null;
    }
}
