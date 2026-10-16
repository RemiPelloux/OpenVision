
/* Address: 0x18000b950; Evidence: ev_865b8f5a8dab7f8fcbc7ca173b41a8c302a22959a57515c55a5e817e6e4ea9de */

undefined8 FUN_18000b950(uint param_1)

{
  undefined4 *puVar1;
  
  if (param_1 == 0xfffffffe) {
    puVar1 = (undefined4 *)FUN_18000617c();
    *puVar1 = 0;
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) {
      if ((*(byte *)((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    puVar1 = (undefined4 *)FUN_18000617c();
    *puVar1 = 0;
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
    FUN_180005ff8();
  }
  return 0xffffffffffffffff;
}

