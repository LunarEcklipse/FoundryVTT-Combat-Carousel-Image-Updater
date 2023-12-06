import Logger from "./logger.mjs";

/* INIT HOOK */

Hooks.once('init', function() {
    Logger.log("Combat Carousel Auto-Updater is loading!");
});