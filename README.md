# SCS - Investimentos

## Sobre o Projeto

O SCS - Investimentos é um site moderno e profissional focado em serviços de investimentos e consultoria financeira. Este projeto foi desenvolvido utilizando tecnologias web de ponta para proporcionar uma experiência excepcional aos investidores.

## Visão Geral

O site serve como porta de entrada para:
- Apresentação dos serviços de investimento
- Histórico e desempenho dos investimentos
- Informações sobre nossa abordagem de investimentos
- Canal direto de contato com nossa equipe

## Começando

Para executar este projeto localmente, você precisará ter o Node.js instalado em sua máquina.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```sh
git clone https://github.com/acioligeorge/csc-solutions-hub.git
```

2. Entre no diretório do projeto:
```sh
cd csc-solutions-hub
```

3. Instale as dependências:
```sh
npm install
```

4. Inicie o servidor de desenvolvimento:
```sh
npm run dev
```

O site estará disponível em `http://localhost:5173`

## Tecnologias Utilizadas

O site foi desenvolvido com um conjunto robusto de tecnologias modernas:

- **React** - Para uma interface dinâmica e responsiva
- **TypeScript** - Garantindo maior segurança e manutenibilidade do código
- **Vite** - Para um desenvolvimento ágil e build otimizado
- **Tailwind CSS** - Proporcionando um design moderno e consistente
- **shadcn/ui** - Componentes sofisticados para melhor experiência do usuário
- **React Router** - Navegação suave entre as páginas

## Estrutura do Projeto

O site está organizado nas seguintes seções principais:

```
src/
  ├── components/     # Componentes da interface
      ├── ui/        # Componentes base da interface
      └── sections/  # Seções principais do site
  ├── pages/         # Páginas do site
      ├── Index.tsx     # Página inicial
      ├── Historia.tsx  # Nossa história
      ├── Servicos.tsx # Serviços oferecidos
      ├── Portfolio.tsx # Portfólio de investimentos
      └── Contacto.tsx  # Página de contato
  ├── hooks/         # Hooks personalizados
  └── lib/           # Utilitários e configurações
```

## Deploy

O projeto pode ser construído para produção usando:

```sh
npm run build
```

Os arquivos de produção serão gerados no diretório `dist/`

## Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar um pull request.
