
/* Address: 0x180003820; Evidence: ev_4faae231aa969b0e24715da3e143671c7ddbf052a71d390204af496e8411d3a8 */

void FUN_180003820(void)

{
  undefined *puVar1;
  
  if (DAT_18001b070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_18001b070);
    __vcrt_FlsSetValue(DAT_18001b070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_18001c150)) {
      thunk_FUN_180007bd0(puVar1);
    }
  }
  return;
}

