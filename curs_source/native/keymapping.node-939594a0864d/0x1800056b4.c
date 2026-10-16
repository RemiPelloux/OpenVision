
/* Address: 0x1800056b4; Evidence: ev_2007a2c7ea8bbfc0ad6c3335882e09d048eaf1e42df9f697798d638bd07dc068 */

void FUN_1800056b4(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000bff0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

