
/* Address: 0x1800033f0; Evidence: ev_5f3580863fdc73cacb05ed187f8141922764d536f55753a310d82a938b341bc6 */

undefined8 * FUN_1800033f0(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = &PTR_FUN_18001e0b8;
  if ((HANDLE)param_1[9] != (HANDLE)0x0) {
    CloseHandle((HANDLE)param_1[9]);
  }
  FUN_180002a80(param_1 + 5);
  FUN_180003490(param_1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000cbe0(param_1);
  }
  return param_1;
}

