<?php

namespace Illuminate\Support\Traits;

trait Conditionable
{
    /**
     * Apply the callback if the given "value" is truthy.
     *
     * @param  mixed  $value
     * @param  callable  $callback
     * @param  callable|null  $default
<<<<<<< HEAD
     * @return $this|mixed
=======
     *
     * @return mixed
>>>>>>> 3838afb4629d7fb0bf8ee8c43ddc65312fda9c52
     */
    public function when($value, $callback, $default = null)
    {
        if ($value) {
            return $callback($this, $value) ?: $this;
        } elseif ($default) {
            return $default($this, $value) ?: $this;
        }

        return $this;
    }

    /**
     * Apply the callback if the given "value" is falsy.
     *
     * @param  mixed  $value
     * @param  callable  $callback
     * @param  callable|null  $default
<<<<<<< HEAD
     * @return $this|mixed
=======
     *
     * @return mixed
>>>>>>> 3838afb4629d7fb0bf8ee8c43ddc65312fda9c52
     */
    public function unless($value, $callback, $default = null)
    {
        if (! $value) {
            return $callback($this, $value) ?: $this;
        } elseif ($default) {
            return $default($this, $value) ?: $this;
        }

        return $this;
    }
}
