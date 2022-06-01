import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...resultadosDaBusca]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.nome === value.nome}
      getOptionLabel={(option) => option.nome}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Buscar em todo o YoGurt"
          sx={{ }}
          variant="filled"
          color="error"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}

//chama do back os resultados. Ex. filmes
const resultadosDaBusca = [
  {
    nome: "Frederico Chaves do Madruga",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Encanamento Deumkilometro",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Florinda Cacetada",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Dona Maguila",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Madruguinha Mama",
    talvezPassarAFotoTbm: "data:image/jpeg;base64,/......"
  },
  {
    nome: "Senhorita do Setenta e Um",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Buchechas de Buldogue Velho",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Baratinha Verde",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome:
      "Vou Plantar um pé de Carambolas que vai dar um Milhão de Carambolas...",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Peludinhodinhodinho Peludãodãodão",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Conta Tudo pra sua Mãe Quico",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  },
  {
    nome: "Só não te dou Outra Porque...",
    talvezPassarAFotoTbm:
      "data:image/jpeg;base64,/......Só n sei como chamar ainda na busca"
  }
];
