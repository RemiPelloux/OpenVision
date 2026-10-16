
/* Address: 0x18000b0e0; Evidence: ev_1fdd2905c68a0a5871c3c9038c3fe171a8157373205d15e69c39969bcd6bf08e */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180028408) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

