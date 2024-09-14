import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`*📍 _Loading... [█████████████] 100%_*

           
 *${mssg.ping}* : ${latensi.toFixed(4)} 𝙎𝙈
                  🎩🤖
 *🛡️˻𝗦𝝜𝗔𝗡𝗜-𝗠𝗗-:𝟗͢𝟗𝟒˼🛡️*`);
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
