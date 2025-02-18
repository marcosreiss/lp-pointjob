import BaseLayout from "src/components/layout/BaseLayout";

export default function Home() {
  return (
    <BaseLayout 
    bgColor="linear-gradient(to bottom, #236742 5%, #ffffff 100%)"
    height="2000px"
    >
      <div className="bg-primary text-primary-foreground p-4 rounded">
        Este é um botão ou componente com a cor primária (#236742) e texto branco.
      </div>
    </BaseLayout>
  );
}