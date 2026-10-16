
/* Address: 0x180005a50; Evidence: ev_838808185b071d11429586b2a5d638e95096131cd5cc72f6df15ad5878ac700b */

void FUN_180005a50(void)

{
  undefined *puVar1;
  
  if (DAT_180027070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180027070);
    __vcrt_FlsSetValue(DAT_180027070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800281b0)) {
      thunk_FUN_18000bff0(puVar1);
    }
  }
  return;
}

