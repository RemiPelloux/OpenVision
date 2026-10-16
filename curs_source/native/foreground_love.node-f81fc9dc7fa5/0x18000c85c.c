
/* Address: 0x18000c85c; Evidence: ev_5d6edb7ad2a67b98f46d2c54cbe82a333ff7e28fd3fcf7f83042b5fe73e0e2b0 */

byte FUN_18000c85c(uint param_1)

{
  undefined4 *puVar1;
  
  if (param_1 == 0xfffffffe) {
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) {
      return *(byte *)((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
    FUN_180005ff8();
  }
  return 0;
}

