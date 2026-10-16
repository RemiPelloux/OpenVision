
/* Address: 0x1800091e0; Evidence: ev_09cac29fa32e4401d612b25eee378270be5f0e9ac6c60af3fc70cc01f45669ec */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18001c65c == '\0') {
    DAT_18001c648 = &DAT_18001b550;
    DAT_18001c650 = &DAT_18001b210;
    DAT_18001c640 = &DAT_18001b440;
    p_Var1 = (__acrt_ptd *)FUN_180007764();
    in_RAX = FUN_180008eb8(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_18001c650);
    DAT_18001c65c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

