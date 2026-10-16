
/* Address: 0x180013dec; Evidence: ev_74e34ad652b76a743cc0f62c073dcce839ca7e5e165ce96f38b5b9dc1c065020 */

/* Library Function - Single Match
    memcpy_s
   
   Libraries: Visual Studio 2015, Visual Studio 2017, Visual Studio 2019 */

errno_t __cdecl memcpy_s(void *_Dst,rsize_t _DstSize,void *_Src,rsize_t _MaxCount)

{
  __acrt_ptd *p_Var1;
  errno_t eVar2;
  
  if (_MaxCount == 0) {
LAB_180013e09:
    eVar2 = 0;
  }
  else {
    if (_Dst == (void *)0x0) {
LAB_180013e12:
      p_Var1 = FUN_18000b774();
      eVar2 = 0x16;
    }
    else {
      if ((_Src != (void *)0x0) && (_MaxCount <= _DstSize)) {
        FUN_180017e30(_Dst,_Src,_MaxCount);
        goto LAB_180013e09;
      }
      FUN_180017a70(_Dst,0,_DstSize);
      if (_Src == (void *)0x0) goto LAB_180013e12;
      if (_MaxCount <= _DstSize) {
        return 0x16;
      }
      p_Var1 = FUN_18000b774();
      eVar2 = 0x22;
    }
    *(errno_t *)p_Var1 = eVar2;
    FUN_18000821c();
  }
  return eVar2;
}

