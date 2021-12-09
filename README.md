![Dump It!](https://github.com/Kozenomenon/DumpIt/blob/main/DumpItRepo_Icon-312.png?raw=true)
# Dump It!
Ark Mod that will dump all craft items as json to a url you provide. 

Also includes a simple nodejs web service that can dump the post to file.

## Web Svc
Located under `/WebSvc`. 

It is a barebones nodejs web service that will run on `http://localhost:5555`. 

You will need to have [NodeJS](https://nodejs.org/) installed of course!

Run the web svc like any node:
_adjust path to fit where you have it_
```
C:\> cd Path\To\Repo\DumpIt\WebSvc
C:\Path\To\Repo\DumpIt\WebSvc> node .\dumper.js
```
Then run the mod in an Ark process on same machine and it will post the dump to the svc. 

The web svc will write the `dump.json` into the `WebSvc` folder.

## Ark Mod
[Steam Workshop Link](https://steamcommunity.com/sharedfiles/filedetails/?id=2677141095)

Located under `/ArkMod`.

Copy the `/ArkMod/DumpIt` folder to your `/Mods` folder in Ark DevKit.

You should open `/DumpIt/_1Macros/DumpIt_JsonStructArrayMacros` first & save it.

Then you can open `/DumpIt/DumpItActor` BP. So your kit does not freak over the macro node...

_Actor is assigned to PGD singletons array. Once running in game or PIE you can dump data using command below._

## Console Command
```
admincheat scriptcommand dumpit
```

## INI Settings
```ini
[DumpIt]
DumpOnStart=False
Minify=False
DumpUrl="http://localhost:5555"
DumpItTimeout=10.0
```

## Example Usage
[Using VS Code + DevKit](https://i.gyazo.com/02f71e1a9f10a5a1fa6e8d13b08ee67f.mp4)

[Using Cmd.exe + DevKit](https://i.gyazo.com/04ba1dce38066fda95de0dfb89a01588.mp4)
