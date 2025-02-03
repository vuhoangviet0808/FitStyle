# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION ${CMAKE_VERSION}) # this file comes with cmake

# If CMAKE_DISABLE_SOURCE_CHANGES is set to true and the source directory is an
# existing directory in our source tree, calling file(MAKE_DIRECTORY) on it
# would cause a fatal error, even though it would be a no-op.
if(NOT EXISTS "D:/Clothes/prjClothes/build/external/glog-prefix/src/glog")
  file(MAKE_DIRECTORY "D:/Clothes/prjClothes/build/external/glog-prefix/src/glog")
endif()
file(MAKE_DIRECTORY
  "D:/Clothes/prjClothes/build/external/glog-prefix/src/glog-build"
  "D:/Clothes/prjClothes/build/external/gflags-install"
  "D:/Clothes/prjClothes/build/external/glog-prefix/tmp"
  "D:/Clothes/prjClothes/build/external/glog-prefix/src/glog-stamp"
  "D:/Clothes/prjClothes/build/external/glog-prefix/src"
  "D:/Clothes/prjClothes/build/external/glog-prefix/src/glog-stamp"
)

set(configSubDirs Debug;Release)
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "D:/Clothes/prjClothes/build/external/glog-prefix/src/glog-stamp/${subDir}")
endforeach()
if(cfgdir)
  file(MAKE_DIRECTORY "D:/Clothes/prjClothes/build/external/glog-prefix/src/glog-stamp${cfgdir}") # cfgdir has leading slash
endif()
