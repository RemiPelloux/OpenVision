
/* Address: 0x180006bf8; Evidence: ev_7cfa49b2781bf500164c6fbf642219e81d61b367dec67dd09e0d94335f9d51c3 */

void FUN_180006bf8(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_18000cbe0((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

