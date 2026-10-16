
/* Address: 0x18000f5e0; Evidence: ev_032abc86610d92bf56234e34a4d9af40ec658f6c545cff560e703bbd3e28a7e3 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_1800246fc == '\0') {
    DAT_1800246e8 = &DAT_180023550;
    DAT_1800246f0 = &DAT_180023210;
    DAT_1800246e0 = &DAT_180023440;
    p_Var1 = (__acrt_ptd *)FUN_18000db64();
    in_RAX = FUN_18000f2b8(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_1800246f0);
    DAT_1800246fc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

