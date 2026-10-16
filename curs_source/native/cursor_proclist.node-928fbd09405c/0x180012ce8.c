
/* Address: 0x180012ce8; Evidence: ev_96e226e8112926931232192c824fa05f302d948d627b2abd527f114f0b3524f8 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18002982c == '\0') {
    DAT_180029818 = &DAT_180028590;
    DAT_180029820 = &DAT_180028250;
    DAT_180029810 = &DAT_180028480;
    p_Var1 = (__acrt_ptd *)FUN_1800112a4();
    in_RAX = FUN_1800129c0(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_180029820);
    DAT_18002982c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

