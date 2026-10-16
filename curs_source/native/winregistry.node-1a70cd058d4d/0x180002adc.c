
/* Address: 0x180002adc; Evidence: ev_0e4b87b5994bf6ba45570bb473818c6d632a977e20e13ef52ebd33d87842b9fb */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180002adc(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_18001c0f1 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180002c64(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_18001c0f8 = 0xffffffffffffffff;
      uRam000000018001c100 = 0xffffffffffffffff;
      _DAT_18001c108 = 0xffffffffffffffff;
      _DAT_18001c110 = 0xffffffffffffffff;
      uRam000000018001c118 = 0xffffffffffffffff;
      _DAT_18001c120 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_18001c0f8);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_18001c110), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_18001c0f1 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

