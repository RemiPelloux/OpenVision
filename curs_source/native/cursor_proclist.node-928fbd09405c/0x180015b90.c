
/* Address: 0x180015b90; Evidence: ev_c4cca2885083418e36743301617c08d3d18dd1f59fc4a8d1902e72e6b808f12c */

/* Library Function - Single Match
    _mbsdec_l
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

uchar * __cdecl _mbsdec_l(uchar *_Start,uchar *_Pos,_locale_t _Locale)

{
  __acrt_ptd *p_Var1;
  byte *pbVar2;
  longlong local_28 [2];
  longlong local_18;
  char local_10;
  
  if ((_Start == (uchar *)0x0) || (_Pos == (uchar *)0x0)) {
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000f91c();
  }
  else if (_Start < _Pos) {
    FUN_18000f2b0(local_28,(longlong *)_Locale);
    pbVar2 = _Pos + -1;
    if (*(int *)(local_18 + 8) != 0) {
      do {
        pbVar2 = pbVar2 + -1;
        if (pbVar2 < _Start) break;
      } while ((*(byte *)((ulonglong)*pbVar2 + 0x19 + local_18) & 4) != 0);
      pbVar2 = _Pos + (-1 - (ulonglong)((int)_Pos - (int)pbVar2 & 1));
    }
    if (local_10 == '\0') {
      return pbVar2;
    }
    *(uint *)(local_28[0] + 0x3a8) = *(uint *)(local_28[0] + 0x3a8) & 0xfffffffd;
    return pbVar2;
  }
  return (uchar *)0x0;
}

