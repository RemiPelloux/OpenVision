
/* Address: 0x1800024f0; Evidence: ev_c91026d855b9fce2dec22f8c2a602d5d199d8ed5ec95f4e053d6e84f399de06e */

void FUN_1800024f0(void)

{
  undefined *puVar1;
  
  if (DAT_180019070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180019070);
    __vcrt_FlsSetValue(DAT_180019070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_18001a090)) {
      thunk_FUN_180006a30(puVar1);
    }
  }
  return;
}

