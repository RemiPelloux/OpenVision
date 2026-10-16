
/* Address: 0x180005b20; Evidence: ev_b0f6b9173b0d5de4c4249d4e6b655465edd2412c024d0479f3fdca3147a5ed44 */

/* Library Function - Single Match
    wcsncmp
   
   Library: Visual Studio 2005 Release */

int __cdecl wcsncmp(wchar_t *_Str1,wchar_t *_Str2,size_t _MaxCount)

{
  if (_MaxCount == 0) {
    return 0;
  }
  for (; ((_MaxCount = _MaxCount - 1, _MaxCount != 0 && (*_Str1 != L'\0')) && (*_Str1 == *_Str2));
      _Str1 = _Str1 + 1) {
    _Str2 = _Str2 + 1;
  }
  return (uint)(ushort)*_Str1 - (uint)(ushort)*_Str2;
}

