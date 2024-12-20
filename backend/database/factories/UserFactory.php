<?php

namespace Database\Factories;

use App\Models\Enrollment;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    public function teacher(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'course' => null,
                'year' => null,
                'role_id' => '2',
            ];
        });
    }

    public function student(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'course' => fake()->randomElement(['BSIT', 'BSCS', 'BSBA', 'BED', 'CAS', 'COC', 'COE']),
                'year' => fake()->randomElement(['1st Year', '2nd Year', '3rd Year', '4th Year']),
                'role_id' => '1',
            ];
        });
    }
}
