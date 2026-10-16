
/* Address: 0x18000b93c; Evidence: ev_c6d2f68b9b82bb2f523332ba0eb5ea980e08e23f8bb6fe89a5abaec8d4ed2102 */

void FUN_18000b93c(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_1800116e0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

