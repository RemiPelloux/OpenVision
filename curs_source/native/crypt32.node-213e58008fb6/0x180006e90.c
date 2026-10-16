
/* Address: 0x180006e90; Evidence: ev_f860674d6c1941e48af21a7dfed6a0b60ccc5e94f85a0b19afa6f9135324e86f */

void FUN_180006e90(void)

{
  undefined *puVar1;
  
  if (DAT_180021070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180021070);
    __vcrt_FlsSetValue(DAT_180021070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800221f0)) {
      thunk_FUN_18000c960(puVar1);
    }
  }
  return;
}

