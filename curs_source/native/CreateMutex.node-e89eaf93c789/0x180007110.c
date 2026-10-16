
/* Address: 0x180007110; Evidence: ev_ebe8cc9c080e0479448793107290f7a03148fa3934ae7728614176b79ecb616c */

void FUN_180007110(void)

{
  undefined *puVar1;
  
  if (DAT_180022070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180022070);
    __vcrt_FlsSetValue(DAT_180022070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800231f0)) {
      thunk_FUN_18000cbe0(puVar1);
    }
  }
  return;
}

