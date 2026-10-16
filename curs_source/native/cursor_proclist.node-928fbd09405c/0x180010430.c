
/* Address: 0x180010430; Evidence: ev_f8636238f4369c07ae85f9a4c137332e14a28549566bbce0650512ca0211d8d3 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180029560) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

