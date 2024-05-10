<?php
declare(strict_types=1);

namespace OCA\Tstt\Listener;

use OCA\Tstt\AppInfo\Application;
use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class LoadAdditionalScriptsListener implements IEventListener
{
    public function handle(Event $event): void
    {
        if ($event instanceof LoadAdditionalScriptsEvent) {
            $this->addScript();
        }

    }

    public function addScript() {
        Util::addScript(Application::APP_ID, 'sidebartab');
    }
}
