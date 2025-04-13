<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Services\BlackjackProfileService;
use Illuminate\Auth\Events\Registered;

class CreateBlackjackProfile
{
    protected $profileService;
    /**
     * Create the event listener.
     */
    public function __construct(BlackjackProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    /**
     * Handle the event.
     */
    public function handle(Registered $event): void
    {
        $user = $event->user;
        $this->profileService->createBlackjackProfile($user);
    }
}
