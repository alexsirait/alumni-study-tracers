<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 'identifier' => $this->faker->unique()->numerify('##########'),
            // 'name' => $this->faker->name(),
            // 'prodi' => $this->faker->word(),
            // 'email' => $this->faker->unique()->safeEmail(),
            // 'telp' => $this->faker->numerify('############'),
            // 'kelamin' => $this->faker->randomElement(['L', 'P']),
            // 'ipk' => $this->faker->randomFloat(4, 0, 10000),
            // 'address' => $this->faker->address(),
            // 'email_verified_at' => now(),
            // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            // 'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
