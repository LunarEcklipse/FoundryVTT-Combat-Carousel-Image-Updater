class CCAutoOptionsForm extends FormApplication
{
    /* 
        Form takes an Actor object in.

        === DATA ===
        * hasCCAutoUpdate - bool - Whether or not to update this token as part of this module.
        * healthyFilePath - string - The file path of the healthy actor token // REQUIRED. Rest are not.
        * injuredFilePath - string - The file path of the injured actor token
        * koFilePath - string - The file path of the knocked out/dead actor token
        * 
    */
    constructor()
    {
        super();
    }

    static get defaultOptions()
    {
        return mergeObject(super.defaultOptions, {
            classes: ['form'],
            popOut: true,
            template: `actorupdate.html`,
            id: "cc-autoupdate-actorupdate",
            title: "Combat Carousel Updater: Update Actor Properties"
        });
    }

    getData()
    {
        return {
            
        }
    }
}