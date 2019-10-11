const Discord = require('discord.js');
const client = new Discord.Client();








const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Aide')
	.setThumbnail('https://cdn.discordapp.com/attachments/632225139739721729/632225597619306497/sans-titre-1.jpg')
	.addField("_commandes miscelanous_", "++ping - affiche pong.\n")
	.addField("_commandes admin_", "++ban Permet de BANNIR le membre mentioné.\n ++kick Permet d'expulser le membre menioné.\n")



client.on('message', msg => {









  client.user.setActivity('++help');

  
  if (msg.content === '++ping') {


    msg.channel.send("```Pong```")
  }
 


  if (msg.content === '++nothing') {


    msg.channel.send("c'est enuyant", {files: ["./images/sans-titre.png"]})
  }


  if (msg.content === '++help') {

	msg.channel.send(exampleEmbed);

  }

  client.on ("guildMemberAdd", member =>{


  	var role = member.guild.roles.find ("name", "🔫| Member");
  	member.addRole (role);



  	

	 })


      client.on("guildMemberAdd", function(message) {
      	
      	let guild = msg.guild;
      	let member = message;
      	let membercount = client.user.size;
      	const embed = new Discord.RichEmbed()
      	.setTitle("Bienvenue")
      	.setColor(0xffffff)
      	.setDescription(`Bienvenue a ${member.user}, sur CrystaliaMC `)
      	.setThumbnail(member.user.avatarURL)

      	msg.channel.send({embed: embed})

});


});





	
 








client.login('NjMyMTkwNjY0MTk2NzUxNDAw.XaCTTw.PHo2M-DFEmUIHhzdx-sqeTXDIkM');
