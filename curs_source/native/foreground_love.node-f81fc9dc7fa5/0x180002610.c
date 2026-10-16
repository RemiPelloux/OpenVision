
/* Address: 0x180002610; Evidence: ev_ac73dc0d9ce621c1b9963806e650f4aa79ebdc1fa061b2d11d788f8f1daefe84 */

void FUN_180002610(void)

{
  undefined *puVar1;
  
  if (DAT_18001a070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_18001a070);
    __vcrt_FlsSetValue(DAT_18001a070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_18001b090)) {
      thunk_FUN_180006b50(puVar1);
    }
  }
  return;
}

