
/* Address: 0x18000df70; Evidence: ev_dac49c0e0c5ed9d8fab436dffa51e0cdb2aaa14fb57b27a3f469344ef4fe7182 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_1800226fc == '\0') {
    DAT_1800226e8 = &DAT_180021550;
    DAT_1800226f0 = &DAT_180021210;
    DAT_1800226e0 = &DAT_180021440;
    p_Var1 = (__acrt_ptd *)FUN_18000c4f4();
    in_RAX = FUN_18000dc48(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_1800226f0);
    DAT_1800226fc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

