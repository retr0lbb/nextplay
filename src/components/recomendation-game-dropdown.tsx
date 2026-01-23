import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserDropdownMenuProps {
  trigger: React.ReactNode;
}
export function RecomendationGameDropdown(props: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Adicionar a lista de jogos</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          Excluir recomendação
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
