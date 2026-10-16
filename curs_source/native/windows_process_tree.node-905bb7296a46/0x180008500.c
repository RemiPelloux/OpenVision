
/* Address: 0x180008500; Evidence: ev_ebe87886da6b82d488d57d61fcb34816f95306b3ecee75c96e54731f7b55c3d6 */

void FUN_180008500(void)

{
  undefined *puVar1;
  
  if (DAT_180023070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180023070);
    __vcrt_FlsSetValue(DAT_180023070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_1800241f0)) {
      thunk_FUN_18000dfd0(puVar1);
    }
  }
  return;
}

