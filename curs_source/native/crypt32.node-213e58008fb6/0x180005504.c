
/* Address: 0x180005504; Evidence: ev_86595d81dd2b0aded9a78896c73356f96f420ab3a13ddd8aff9e07227450f1a8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180005504(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_1800221a1 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_18000568c(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_1800221a8 = 0xffffffffffffffff;
      uRam00000001800221b0 = 0xffffffffffffffff;
      _DAT_1800221b8 = 0xffffffffffffffff;
      _DAT_1800221c0 = 0xffffffffffffffff;
      uRam00000001800221c8 = 0xffffffffffffffff;
      _DAT_1800221d0 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_1800221a8);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_1800221c0), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_1800221a1 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

