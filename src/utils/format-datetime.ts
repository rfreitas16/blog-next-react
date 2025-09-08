import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);
  console.log(date);
  return format(date, "dd/MM/yyyy 'as' HH'h'mm", {
    locale: ptBR,
  });
}
export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);
  console.log(date);
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
