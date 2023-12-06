const preWrite = "Combat Carousel Auto-Updater | ";

export default class Logger
{
    static log(message)
    {
        console.log(preWrite + message.toString());
    }

    static warn(message)
    {
        console.warn(preWrite + message.toString());
    }

    static error(message)
    {
        console.error(preWrite + message.toString());
    }
}