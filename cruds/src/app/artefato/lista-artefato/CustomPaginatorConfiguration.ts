import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Nº de itens por página: ';
  customPaginatorIntl.nextPageLabel = 'Próxima página ';
  customPaginatorIntl.previousPageLabel = 'Página anterior ';

  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 à ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `Status: ${startIndex + 1} de ${endIndex} | Registros localizados: ${length}  `;
  };

  return customPaginatorIntl;
}
