
/* Address: 0x18000c73c; Evidence: ev_8e5ab71bb4d7152e7c7fdb27c78e08cab4ce0924c1ad6b90a51508919fcbe45c */

byte FUN_18000c73c(uint param_1)

{
  undefined4 *puVar1;
  
  if (param_1 == 0xfffffffe) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001aa80)) {
      return *(byte *)((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
    FUN_180005ed8();
  }
  return 0;
}

