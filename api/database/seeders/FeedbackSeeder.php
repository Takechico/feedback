<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use App\Modules\Feedback\Models\Feedback;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Create 50 sample feedback entries
        for ($i = 0; $i < 50; $i++) {
            Feedback::create([
                'rating' => $faker->numberBetween(1, 5),
                'message' => $faker->paragraph(3),
                'customer_name' => $faker->name(),
            ]);
        }
    }
}
