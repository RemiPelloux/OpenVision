
/* Address: 0x18000ba74; Evidence: ev_6b37ba29361e6a94bcb6d68630ecb0680ae4a75554e2caedf9abdf1a4968912c */

void FUN_18000ba74(void)

{
  undefined *puVar1;
  
  if (DAT_1800280b0 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_1800280b0);
    __vcrt_FlsSetValue(DAT_1800280b0,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_180029320)) {
      thunk_FUN_1800116e0(puVar1);
    }
  }
  return;
}

