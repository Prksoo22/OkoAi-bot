module.exports = {
    name: "sc",
    aliases: ["script", "source", "sourcecode"],
    category: "information",
    code: async (ctx) => {
        await ctx.reply(`Ingin membeli script? Silahkan hubungi .owner untuk informasi lebih lanjut!
        
*I n f o r m a s i - S c r i p t*
- Type : ${formatter.italic("Plugin(s) Esm Perfolder")}
- Size : ${formatter.italic("150Kb±")}
- Terkunci : ${formatter.italic("Tidak")}
- Tingkat Enc/TerKunci : ${formatter.italic("Tidak Terkunci 100%")}
- Baileys : ${formatter.italic("@Prksoo22/okoai atau github:Prksoo22/okoai")}

*U j i - C o b a - S c r i p t*
github.com/Prksoo22/OkoAi-bot

*K e u n g g u l a n*
- ${formatter.italic("Sistem tersusun secara rapi")}
- ${formatter.italic("Kode tidak di encrypt jadi bebas untuk di recode")}
- ${formatter.italic("Size ringan hanya beberapa kb")}
- ${formatter.italic("Isi fitur/Susunan fitur simpel")}
- ${formatter.italic("Cocok untuk yang suka bot dengan tampilan yang elegan")}

*_Contact Service & Owner_* : wa.me/6285168864066`);
    }
};