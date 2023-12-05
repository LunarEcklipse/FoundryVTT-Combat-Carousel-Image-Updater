class TBFCarouselAutoupdate
{
    static ID = "tbf-carousel-autoupdate";

    static CheckActorValidity(actor)
    {
        if (Object.hasOwn(actor, "system"))
        {
            if (Object.hasOwn(actor.system, "attributes"))
            {
                if (Object.hasOwn(actor.system.attributes, "HasCarouselTokens"))
                {
                    if (actor.system.attributes.HasCarouselTokens.value === true)
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    static UpdateCharacterToken(actor) // Pass in an actor object to this function.
    {
        if (this.CheckActorValidity(actor))
        {
            let img_str = actor.img.toString();
            let substr_base = img_str.substring(0, img_str.lastIndexOf('_')) + '_'; // This should yield a string like "worlds/the-boole-foundation/tokens/Flynn/icons/flynn_"
            if ((actor.system.attributes.HP.value / actor.system.attributes.HP.max) < 0.5)
            {
                actor.update({img: substr_base + "hurt.png"});
            }
            else
            {
                actor.update({img: substr_base + "okay.png"});
            }
        }
        return;
    }

    static onUpdateActor(actor)
    {
        TBFCarouselAutoupdate.UpdateCharacterToken(actor);
    }
}

Hooks.once('ready', async function () {
    console.log("TBF Combat Carousel Autoupdater | Version 1.0.0 - Initializing...");
    for (const [key, value] of game.actors.entries())
    {
        TBFCarouselAutoupdate.UpdateCharacterToken(value);
    }
    console.log("TBF Combat Carousel Autoupdater | Initialization complete!");
});

Hooks.on('updateActor', function (actor, updates)
{
    TBFCarouselAutoupdate.onUpdateActor(actor);
});