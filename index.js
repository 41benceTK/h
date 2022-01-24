if(cmd === `${prefix}title`){
    if(message.member.hasPermission("KICK_MEMBERS")){
        if (args[0]){
            let say_embed = new DynamicsCompressorNode.MessageEmbed()
            .setDescription(args.join(" "))
            .setColor("RANDOM")
            .setFooter(bot.user.username)

            message.channel.send(say_embed);
        }else {
            message.reply("hasznalataL: ${prefix}title <uzenet>")
        }
    } else message.reply("Ehhez nincs jogod (KICK_EMBERS jogot igenyel)")
}