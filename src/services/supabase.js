const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

async function testarConexao() {
    let { data: horarios, error } = await supabase
        .from("horarios")
        .select("*")
        .limit(5);

    if (error) {
        console.error("Erro ao conectar ao Supabase:", error);
    } else {
        console.log(
            "Conexão bem-sucedida! Dados encontrados (limitados em 5):",
            horarios
        );
    }
}

testarConexao();
