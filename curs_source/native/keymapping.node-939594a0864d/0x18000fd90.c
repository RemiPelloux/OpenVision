
/* Address: 0x18000fd90; Evidence: ev_978a606f3f744e49037cca3804940ba81d6d0645c3696089e41b430b6c526329 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_180028bdc == '\0') {
    DAT_180028bc8 = &DAT_1800276b0;
    DAT_180028bd0 = &DAT_180027370;
    DAT_180028bc0 = &DAT_1800275a0;
    p_Var1 = (__acrt_ptd *)FUN_18000bc34();
    in_RAX = FUN_18000fa68(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_180028bd0);
    DAT_180028bdc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

