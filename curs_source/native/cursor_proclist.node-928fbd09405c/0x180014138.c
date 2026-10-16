
/* Address: 0x180014138; Evidence: ev_9828a5ccb53ec62dbfd39b8a5b5d7dfd5195530699a92c398b44852c60c7222c */

undefined8 FUN_180014138(int *param_1,longlong *param_2)

{
  WCHAR *pWVar1;
  uint uVar2;
  uint uVar3;
  
  if ((((byte)param_1[5] & 3) == 2) && ((param_1[5] & 0xc0U) != 0)) {
    uVar3 = *param_1 - param_1[2];
    param_1[4] = 0;
    pWVar1 = *(WCHAR **)(param_1 + 2);
    *(WCHAR **)param_1 = pWVar1;
    if (0 < (int)uVar3) {
      uVar2 = FUN_1800149a4((longlong)param_1);
      uVar2 = FUN_180016df4(uVar2,pWVar1,uVar3,param_2);
      if (uVar3 != uVar2) {
        LOCK();
        param_1[5] = param_1[5] | 0x10;
        UNLOCK();
        return 0xffffffff;
      }
      if (((uint)param_1[5] >> 2 & 1) != 0) {
        LOCK();
        param_1[5] = param_1[5] & 0xfffffffd;
        UNLOCK();
      }
    }
  }
  return 0;
}

